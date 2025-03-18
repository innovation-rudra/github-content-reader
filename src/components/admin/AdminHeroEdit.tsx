
import React, { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";

interface HeroContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cta_text: string;
  cta_link: string;
}

function AdminHeroEdit() {
  const [content, setContent] = useState<HeroContent | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchHeroContent();
  }, []);

  const fetchHeroContent = async () => {
    const { data, error } = await supabase
      .from('hero_content')
      .select('*')
      .single();

    if (!error && data) {
      setContent(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!content) return;

    const { error } = await supabase
      .from('hero_content')
      .upsert({
        id: content.id,
        title: content.title,
        subtitle: content.subtitle,
        description: content.description,
        cta_text: content.cta_text,
        cta_link: content.cta_link,
      });

    if (!error) {
      setIsEditing(false);
      await fetchHeroContent();
    }
  };

  if (!content) return <div>Loading...</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Hero Section Content</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={content.title}
              onChange={(e) => setContent({ ...content, title: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Subtitle</label>
            <input
              type="text"
              value={content.subtitle}
              onChange={(e) => setContent({ ...content, subtitle: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={content.description}
              onChange={(e) => setContent({ ...content, description: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">CTA Text</label>
            <input
              type="text"
              value={content.cta_text}
              onChange={(e) => setContent({ ...content, cta_text: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">CTA Link</label>
            <input
              type="text"
              value={content.cta_link}
              onChange={(e) => setContent({ ...content, cta_link: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Save Changes
          </button>
        </form>
      ) : (
        <div className="space-y-4">
          <p><strong>Title:</strong> {content.title}</p>
          <p><strong>Subtitle:</strong> {content.subtitle}</p>
          <p><strong>Description:</strong> {content.description}</p>
          <p><strong>CTA Text:</strong> {content.cta_text}</p>
          <p><strong>CTA Link:</strong> {content.cta_link}</p>
        </div>
      )}
    </div>
  );
}

export default AdminHeroEdit;
