
import React, { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";

interface TeamMember {
  id: string;
  name: string;
  designation: string | null;
  photo_url: string | null;
}

function AdminTeamEdit() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentMember, setCurrentMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    const { data, error } = await supabase
      .from('team_members')
      .select('*');

    if (!error && data) {
      setMembers(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentMember) return;

    const { error } = await supabase
      .from('team_members')
      .upsert({
        id: currentMember.id,
        name: currentMember.name,
        designation: currentMember.designation,
        photo_url: currentMember.photo_url,
      });

    if (!error) {
      setIsEditing(false);
      await fetchTeamMembers();
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Team Members</h2>
        <button
          onClick={() => {
            setCurrentMember({ id: '', name: '', designation: '', photo_url: '' });
            setIsEditing(true);
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Member
        </button>
      </div>

      {isEditing && currentMember ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={currentMember.name}
              onChange={(e) => setCurrentMember({ ...currentMember, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Designation</label>
            <input
              type="text"
              value={currentMember.designation || ''}
              onChange={(e) => setCurrentMember({ ...currentMember, designation: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Photo URL</label>
            <input
              type="text"
              value={currentMember.photo_url || ''}
              onChange={(e) => setCurrentMember({ ...currentMember, photo_url: e.target.value })}
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
          {members.map((member) => (
            <div key={member.id} className="border p-4 rounded">
              <h3 className="font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.designation}</p>
              <button
                onClick={() => {
                  setCurrentMember(member);
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

export default AdminTeamEdit;
