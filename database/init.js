import User from "../models/User.model.js";
import bcrypt from "bcrypt";

const initTrainers = async () => {
  const trainers = [
    {
      name: 'Bee Cho',
      password: await bcrypt.hash('Erbscope2025', 10),
      email: 'lcys20252025+1@gmail.com',
      plan: 'other',
      role: 'trainer',
    },
    {
      name: 'Yami Li',
      password: await bcrypt.hash('Erbscope2025', 10),
      email: 'lcys20252025+2@gmail.com',
      plan: 'other',
      role: 'trainer',
    },
    {
      name: 'Elvis Lam',
      password: await bcrypt.hash('Erbscope2025', 10),
      email: 'lcys20252025+3@gmail.com',
      plan: 'other',
      role: 'trainer',
    }
  ];

  for (const trainer of trainers) {
    await User.findOneAndUpdate(
      { email: trainer.email },
      { $setOnInsert: trainer },
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true
      }
    );
  }
};

export const initializeDB = async () => {
  try {
    await initTrainers();
    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Database initialization failed:", error);
  }
};