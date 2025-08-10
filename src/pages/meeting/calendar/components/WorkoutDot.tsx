import React from 'react';

interface WorkoutDotProps {
  color: string;
}

const WorkoutDot: React.FC<WorkoutDotProps> = ({ color }) => {
  return (
    <div
      className="w-1.5 h-1.5 rounded-full"
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default WorkoutDot;
