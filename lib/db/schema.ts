import { sql } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  username: text('username').notNull().unique(),
  fullName: text('full_name'),
  avatarUrl: text('avatar_url'),
  bio: text('bio'),
  isPrivate: integer('is_private', { mode: 'boolean' }).default(false),
  followerCount: integer('follower_count').default(0),
  followingCount: integer('following_count').default(0),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`)
});

export const videos = sqliteTable('videos', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id),
  title: text('title').notNull(),
  description: text('description'),
  url: text('url'),
  thumbnailUrl: text('thumbnail_url'),
  duration: integer('duration'),
  views: integer('views').default(0),
  likes: integer('likes').default(0),
  status: text('status', { enum: ['draft', 'processing', 'published', 'failed'] }).default('draft'),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`)
});