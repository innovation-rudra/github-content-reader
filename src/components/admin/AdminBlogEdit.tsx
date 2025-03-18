
import React, { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  id: string;
  title: string;
  content: string | null;
  image_url: string | null;
  published_date: string | null;
}

function AdminBlogEdit() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*');

    if (!error && data) {
      setPosts(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentPost) return;

    const { error } = await supabase
      .from('blog_posts')
      .upsert({
        id: currentPost.id,
        title: currentPost.title,
        content: currentPost.content,
        image_url: currentPost.image_url,
        published_date: currentPost.published_date,
      });

    if (!error) {
      setIsEditing(false);
      await fetchPosts();
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Blog Posts</h2>
        <button
          onClick={() => {
            setCurrentPost({
              id: '',
              title: '',
              content: '',
              image_url: '',
              published_date: new Date().toISOString().split('T')[0],
            });
            setIsEditing(true);
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Post
        </button>
      </div>

      {isEditing && currentPost ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={currentPost.title}
              onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              value={currentPost.content || ''}
              onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              rows={5}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              value={currentPost.image_url || ''}
              onChange={(e) => setCurrentPost({ ...currentPost, image_url: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Published Date</label>
            <input
              type="date"
              value={currentPost.published_date || ''}
              onChange={(e) => setCurrentPost({ ...currentPost, published_date: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div className="flex space-x-2">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="border p-4 rounded">
              <h3 className="font-bold">{post.title}</h3>
              <p className="text-gray-600">{post.published_date}</p>
              <button
                onClick={() => {
                  setCurrentPost(post);
                  setIsEditing(true);
                }}
                className="mt-2 px-3 py-1 bg-blue-500 text-white rounded text-sm"
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminBlogEdit;
