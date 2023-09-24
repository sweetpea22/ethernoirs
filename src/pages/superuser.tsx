import Dashboard from '@/components/Dashboard';
import { useAccount } from 'wagmi';
import { useState, useEffect } from 'react';
import SuperUserDo from '@/components/Superuser';




export default function SuperUser() {
  
  return (
    <>
    <Dashboard>
      <SuperUserDo />
    </Dashboard>
    </>
  );
}
