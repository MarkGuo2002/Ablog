--tables for the database
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_profile_photo_url VARCHAR(255),
    bio TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE blogs (
    blog_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    tags VARCHAR(255) NOT NULL,
    is_draft BOOLEAN DEFAULT TRUE,
    is_trash BOOLEAN DEFAULT FALSE,
    blog_music_url VARCHAR(255),
    blog_portrait_photo_url VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE blog_photos (
    photo_id SERIAL PRIMARY KEY,
    photo_url VARCHAR(255) NOT NULL,
    blog_id INT REFERENCES blogs(blog_id) ON DELETE CASCADE
);


-- trigger function to update the updated_at column
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_user_updated_at
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER set_blog_updated_at
BEFORE UPDATE ON blogs
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

-- Indexes
CREATE INDEX idx_blogs_user_id ON blogs(user_id);
CREATE INDEX idx_blog_photos_blog_id ON blog_photos(blog_id);


-- Your design takes into account key aspects of data integrity, performance optimization with indexing, and automatic maintenance of audit fields using triggers. Just ensure the following:
-- Password Storage: The password should be stored as a hash rather than plain text or encrypted form. Ensure that your application handles this.
-- Error Handling in Triggers: While your triggers are set up for updating timestamps, always make sure your production code includes error handling, even if not explicitly shown in the database schema.
-- Field Lengths: Ensure that the VARCHAR lengths are sufficient for your use case, and be consistent across the URLs (you might later decide that 255 characters aren't enough for URLs).