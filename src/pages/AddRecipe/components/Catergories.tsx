import React, { useState } from 'react';
import { TextField, Chip } from '@mui/material';

interface CategoriesInputProps {
    chips: string[],
    setChips: React.Dispatch<React.SetStateAction<string[]>>
}

const CategoriesInput: React.FC<CategoriesInputProps> = (props) => {
    const [inputValue, setInputValue] = useState<string>('');
  
    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault()
        addChip();
      }
    };
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };
  
    const addChip = () => {
      if (inputValue.trim() !== '') {
        props.setChips((prevChips) => [...prevChips, inputValue.trim()]);
        setInputValue('');
      }
    };
  
    const handleChipDelete = (chipToDelete: string) => () => {
      props.setChips((prevChips) => prevChips.filter((chip) => chip !== chipToDelete));
    };
  
    return (
      <div>
        <TextField
          label="Type A Category And Psress Enter"
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          fullWidth
        />
        <div>
          {props.chips.map((chip, index) => (
            <Chip
              key={index}
              label={chip}
              onDelete={handleChipDelete(chip)}
              style={{ margin: '5px' }}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default CategoriesInput;