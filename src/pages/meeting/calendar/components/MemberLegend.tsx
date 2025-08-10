import React from 'react';
import type { MemberColor } from '../../../../types/meeting';

interface MemberLegendProps {
  memberColors: MemberColor[];
}

const MemberLegend: React.FC<MemberLegendProps> = ({ memberColors }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-4">
        {memberColors.map((member, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: member.color }}
            ></div>
            <span className="text-xs text-gray-700 truncate">{member.nickname}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberLegend;
