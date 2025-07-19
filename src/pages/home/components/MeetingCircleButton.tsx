import React from 'react';
import BarbellIcon from '../../../assets/Barbell.svg';
import ExerciseIcon from '../../../assets/Exercise.svg';
import BicycleIcon from '../../../assets/Bicycle.svg';

interface MeetingCircleButtonProps {
  workoutType: '조깅' | '자전거' | '헬스';
  isActive?: boolean;
  variant: 'my' | 'other';
  onClick?: () => void;
  className?: string;
}

const MeetingCircleButton: React.FC<MeetingCircleButtonProps> = ({
  workoutType,
  isActive = false,
  variant,
  onClick,
  className = '',
}) => {
  const borderColor = isActive ? 'border-brand-main' : 'border-status-inactive';
  const outerClass =
    variant === 'my'
      ? `w-[55px] h-[55px] border-[3px]`
      : `w-[33px] h-[33px] border-[3px]`;
  const iconClass =
    variant === 'my'
      ? 'w-[35px] h-[35px]'
      : 'w-[20px] h-[20px]';

  let icon = null;
  if (workoutType === '조깅') icon = <img src={ExerciseIcon} alt="조깅" className={iconClass} />;
  if (workoutType === '자전거') icon = <img src={BicycleIcon} alt="자전거" className={iconClass} />;
  if (workoutType === '헬스') icon = <img src={BarbellIcon} alt="헬스" className={iconClass} />;

  return (
    <button
      type="button"
      className={`flex items-center justify-center rounded-full mx-[10px] bg-white ${outerClass} ${borderColor} focus:outline-none ${className}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default MeetingCircleButton; 