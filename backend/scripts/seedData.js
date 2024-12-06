import mongoose from 'mongoose';
import dotenv from 'dotenv';
import ChartData from '../models/ChartData.js';

dotenv.config();

const fundingData = [
  { type: 'funding', title: 'Healthcare AI', value: 1.5 },
  { type: 'funding', title: 'Urban Planning', value: 1.2 },
  { type: 'funding', title: 'Cybersecurity', value: 1.0 },
  { type: 'funding', title: 'Infrastructure', value: 0.8 },
  { type: 'funding', title: 'Student Projects', value: 0.5 }
];

const impactData = [
  { type: 'impact', name: 'Healthcare Improvements', value: 35 },
  { type: 'impact', name: 'Urban Development', value: 25 },
  { type: 'impact', name: 'Cybersecurity', value: 20 },
  { type: 'impact', name: 'Economic Growth', value: 15 },
  { type: 'impact', name: 'Education', value: 5 }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await ChartData.deleteMany({});
    console.log('Cleared existing data');

    // Insert new data
    await ChartData.insertMany([...fundingData, ...impactData]);
    console.log('Successfully seeded database');

    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();