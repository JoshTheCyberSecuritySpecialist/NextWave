import { getSupabase } from './supabase';
import { v4 as uuidv4 } from 'uuid';

export interface VideoUpload {
  file: File;
  title: string;
  description?: string;
}

export async function uploadVideo({ file, title, description }: VideoUpload) {
  const supabase = getSupabase();
  
  try {
    // Get the authenticated user
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');

    // Create a unique filename
    const fileExt = file.name.split('.').pop();
    const fileName = `${uuidv4()}.${fileExt}`;
    const filePath = `videos/${user.id}/${fileName}`;

    // Create the video record in draft status
    const { data: video, error: dbError } = await supabase
      .from('videos')
      .insert({
        user_id: user.id,
        title,
        description,
        status: 'draft'
      })
      .select()
      .single();

    if (dbError) throw dbError;

    // Upload the file to storage
    const { error: uploadError } = await supabase.storage
      .from('videos')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) throw uploadError;

    // Get the public URL
    const { data: { publicUrl } } = supabase.storage
      .from('videos')
      .getPublicUrl(filePath);

    // Update the video record with the URL
    const { error: updateError } = await supabase
      .from('videos')
      .update({
        url: publicUrl,
        status: 'processing'
      })
      .eq('id', video.id);

    if (updateError) throw updateError;

    return { success: true, videoId: video.id };
  } catch (error) {
    console.error('Error uploading video:', error);
    throw error;
  }
}

export async function getVideoStatus(videoId: string) {
  const supabase = getSupabase();
  
  const { data, error } = await supabase
    .from('videos')
    .select('status')
    .eq('id', videoId)
    .single();

  if (error) throw error;
  return data.status;
}