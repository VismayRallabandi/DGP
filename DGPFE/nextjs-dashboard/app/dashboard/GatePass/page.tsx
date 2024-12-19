'use client';
import Form from 'app/components/form';
import withAuth from '@/app/components/withAuth';

function Page() {
  return (
    <div>
      <h1>Submit Your Details</h1>
      <Form />
    </div>
  );
}
export default withAuth( Page);