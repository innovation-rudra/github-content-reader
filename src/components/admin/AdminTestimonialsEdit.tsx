
import React, { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";

interface Testimonial {
  id: string;
  client_name: string;
  client_designation: string | null;
  client_photo_url: string | null;
  content: string;
  rating: number | null;
}

function AdminTestimonialsEdit() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState<Testimonial | null>(null);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*');

    if (!error && data) {
      setTestimonials(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentTestimonial) return;

    const { error } = await supabase
      .from('testimonials')
      .upsert({
        id: currentTestimonial.id,
        client_name: currentTestimonial.client_name,
        client_designation: currentTestimonial.client_designation,
        client_photo_url: currentTestimonial.client_photo_url,
        content: currentTestimonial.content,
        rating: currentTestimonial.rating,
      });

    if (!error) {
      setIsEditing(false);
      await fetchTestimonials();
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Testimonials</h2>
        <button
          onClick={() => {
            setCurrentTestimonial({
              id: '',
              client_name: '',
              client_designation: '',
              client_photo_url: '',
              content: '',
              rating: 5,
            });
            setIsEditing(true);
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Testimonial
        </button>
      </div>

      {isEditing && currentTestimonial ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Client Name</label>
            <input
              type="text"
              value={currentTestimonial.client_name}
              onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, client_name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Designation</label>
            <input
              type="text"
              value={currentTestimonial.client_designation || ''}
              onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, client_designation: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Photo URL</label>
            <input
              type="text"
              value={currentTestimonial.client_photo_url || ''}
              onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, client_photo_url: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              value={currentTestimonial.content}
              onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, content: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              rows={3}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Rating (1-5)</label>
            <input
              type="number"
              min="1"
              max="5"
              value={currentTestimonial.rating || 5}
              onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, rating: parseInt(e.target.value) })}
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
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="border p-4 rounded">
              <h3 className="font-bold">{testimonial.client_name}</h3>
              <p className="text-gray-600">{testimonial.client_designation}</p>
              <p className="mt-2">{testimonial.content}</p>
              <button
                onClick={() => {
                  setCurrentTestimonial(testimonial);
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

export default AdminTestimonialsEdit;
