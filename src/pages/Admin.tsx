
import React from 'react';
import { Box, Grid } from '@mui/material';
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
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <AdminHeroEdit />
        </Grid>
        <Grid item xs={12}>
          <AdminTeamEdit />
        </Grid>
        <Grid item xs={12}>
          <AdminServicesEdit />
        </Grid>
        <Grid item xs={12}>
          <AdminBlogEdit />
        </Grid>
        <Grid item xs={12}>
          <AdminTestimonialsEdit />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Admin;
