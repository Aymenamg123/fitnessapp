import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Trash2, Mail, Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  created_at: string;
}

export default function Admin() {
  const { ref, isVisible } = useScrollAnimation();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setLeads(data || []);
    } catch (error) {
      console.error('Error fetching leads:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;

    setDeleteLoading(id);
    try {
      const { error } = await supabase.from('leads').delete().eq('id', id);
      if (error) throw error;
      setLeads(leads.filter((lead) => lead.id !== id));
    } catch (error) {
      console.error('Error deleting lead:', error);
    } finally {
      setDeleteLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-black font-montserrat text-white py-20 px-4">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mb-12">
          <h1 className="font-bebas text-5xl md:text-6xl mb-6">
            Leads
            <span className="block text-electric-teal">Dashboard</span>
          </h1>
          <p className="text-xl text-gray-300">
            Manage all coaching application leads
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-400">Loading leads...</p>
          </div>
        ) : leads.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">No leads yet</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-700">
                <tr>
                  <th className="text-left py-4 px-6 text-electric-teal font-bebas">Name</th>
                  <th className="text-left py-4 px-6 text-electric-teal font-bebas">Email</th>
                  <th className="text-left py-4 px-6 text-electric-teal font-bebas">Phone</th>
                  <th className="text-left py-4 px-6 text-electric-teal font-bebas">Date</th>
                  <th className="text-left py-4 px-6 text-electric-teal font-bebas">Action</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} className="border-b border-gray-800 hover:bg-gray-900 transition-colors">
                    <td className="py-4 px-6 text-gray-300">{lead.name}</td>
                    <td className="py-4 px-6 text-gray-300">
                      <a href={`mailto:${lead.email}`} className="flex items-center gap-2 hover:text-electric-teal transition-colors">
                        <Mail className="w-4 h-4" />
                        {lead.email}
                      </a>
                    </td>
                    <td className="py-4 px-6 text-gray-300">
                      <a href={`tel:${lead.phone}`} className="flex items-center gap-2 hover:text-electric-teal transition-colors">
                        <Phone className="w-4 h-4" />
                        {lead.phone}
                      </a>
                    </td>
                    <td className="py-4 px-6 text-gray-400">
                      {new Date(lead.created_at).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-6">
                      <button
                        onClick={() => handleDelete(lead.id)}
                        disabled={deleteLoading === lead.id}
                        className="text-red-500 hover:text-red-400 disabled:opacity-50 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Total Leads: <span className="text-electric-teal font-bold">{leads.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
