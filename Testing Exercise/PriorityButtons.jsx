import React, { useState } from 'react';

export default function PriorityButtons({ onPriorityChange}) {
  const [selectedPriority, setSelectedPriority] = useState('');
  

  const handlePriorityChange = (e) => {
    const selectedValue = e.target.id;
    setSelectedPriority(selectedValue);
    onPriorityChange(selectedValue); // Pass the selected priority to the parent
    onPrioritySelectColour(priorityColour)
  };
  const handlePriorityColour = (e) => {
    
    if(selectedPriority === "1"){
      priorityColour = "text-red-50"
    }
    if(selectedPriority === "2"){
      priorityColour = "text-orange-50"
    }
    if(selectedPriority === "3"){
      priorityColour = "text-green-50"
    }




    
  }

 
  return (
    <div className='grid grid-cols-3 gap-4'>
      <div>
        <input
          type='radio'
          name='priority'
          id='P1'
          checked={selectedPriority === 'P1'}
          onChange={handlePriorityChange}
          required
        />
        <label htmlFor='P1'>Priority 1</label>
      </div>
      <div>
        <input
          type='radio'
          name='priority'
          id='P2'
          checked={selectedPriority === 'P2'}
          onChange={handlePriorityChange}
        />
        <label htmlFor='P2'>Priority 2</label>
      </div>
      <div>
        <input
          type='radio'
          name='priority'
          id='P3'
          checked={selectedPriority === 'P3'}
          onChange={handlePriorityChange}
        />
        <label htmlFor='P3'>Priority 3</label>
      </div>
    </div>
  );
}
