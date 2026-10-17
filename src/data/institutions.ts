// Healthcare institutions across the service region.
// These are listed as institutions in our service region, NOT as confirmed customers.
// Do NOT use the heading "Our Clients" or imply a purchasing relationship.
// If actual customer relationships are later verified, update the heading to
// "Trusted by Healthcare Institutions" and move verified institutions to a
// separate verified-customers list.

export interface Institution {
  name: string;
  city: string;
}

export const institutions: Institution[] = [
  { name: 'GSVM Medical College', city: 'Kanpur' },
  { name: 'Lala Lajpat Rai Hospital', city: 'Kanpur' },
  { name: 'Hallet Hospital', city: 'Kanpur' },
  { name: 'Regency Hospital', city: 'Kanpur' },
  { name: 'Madhuraj Hospital', city: 'Kanpur' },
  { name: 'Rama Medical College Hospital', city: 'Kanpur' },
  { name: 'Kalyanpur Singh Hospital', city: 'Kanpur' },
  { name: 'KGMC / KGMU Hospital', city: 'Lucknow' },
  { name: 'Civil Hospital', city: 'Lucknow' },
  { name: 'Dr. Ram Manohar Lohia Institute', city: 'Lucknow' },
  { name: 'LLRM Medical College Hospital', city: 'Meerut' },
  { name: 'Sarojini Naidu Medical College', city: 'Agra' },
  { name: 'MLN Medical College', city: 'Allahabad' },
  { name: 'BRD Medical College Hospital', city: 'Gorakhpur' },
  { name: 'Maharani Laxmi Bai Medical College', city: 'Jhansi' },
  { name: 'JN Medical College Hospital', city: 'Aligarh' },
];

// Verified customer relationships — empty until confirmed.
export const verifiedCustomers: Institution[] = [];
