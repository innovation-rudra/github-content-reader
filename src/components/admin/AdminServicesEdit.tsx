
import React, { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";

interface Service {
  id: string;
  name: string;
  description: string | null;
  icon_id: string | null;
}

function AdminServicesEdit() {
  const [services, setServices] = useState<Service[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentService, setCurrentService] = useState<Service | null>(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const { data, error } = await supabase
      .from('services')
      .select('*');

    if (!error && data) {
      setServices(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentService) return;

    const { error } = await supabase
      .from('services')
      .upsert({
        id: currentService.id,
        name: currentService.name,
        description: currentService.description,
        icon_id: currentService.icon_id,
      });

    if (!error) {
      setIsEditing(false);
      await fetchServices();
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Services</h2>
        <button
          onClick={() => {
            setCurrentService({ id: '', name: '', description: '', icon_id: '' });
            setIsEditing(true);
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Service
        </button>
      </div>

      {isEditing && currentService ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={currentService.name}
              onChange={(e) => setCurrentService({ ...currentService, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={currentService.description || ''}
              onChange={(e) => setCurrentService({ ...currentService, description: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Icon ID</label>
            <input
              type="text"
              value={currentService.icon_id || ''}
              onChange={(e) => setCurrentService({ ...currentService, icon_id: e.target.value })}
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
          {services.map((service) => (
            <div key={service.id} className="border p-4 rounded">
              <h3 className="font-bold">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button
                onClick={() => {
                  setCurrentService(service);
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

export default AdminServicesEdit;
