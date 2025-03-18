
import React from 'react';
import { Box, Grid2 } from '@mui/material';
import { useAuth } from '../components/auth/AuthProvider';
import AdminHeroEdit from '../components/admin/AdminHeroEdit';
import AdminTeamEdit from '../components/admin/AdminTeamEdit';
import AdminServicesEdit from '../components/admin/AdminServicesEdit';
import AdminBlogEdit from '../components/admin/AdminBlogEdit';
import AdminTestimonialsEdit from '../components/admin/AdminTestimonialsEdit';
import { Navigate } from 'react-router-dom';

function Admin() {
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Box className="width-100">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <Grid2 container spacing={4}>
        <Grid2 item xs={12}>
          <AdminHeroEdit />
        </Grid2>
        <Grid2 item xs={12}>
          <AdminTeamEdit />
        </Grid2>
        <Grid2 item xs={12}>
          <AdminServicesEdit />
        </Grid2>
        <Grid2 item xs={12}>
          <AdminBlogEdit />
        </Grid2>
        <Grid2 item xs={12}>
          <AdminTestimonialsEdit />
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default Admin;
