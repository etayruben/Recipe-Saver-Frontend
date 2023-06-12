import React, { useState } from 'react';
import { TextField, Chip} from '@mui/material';

const CategoriesInput: React.FC = () => {
    const [chips, setChips] = useState<string[]>([]);
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
        setChips((prevChips) => [...prevChips, inputValue.trim()]);
        setInputValue('');
      }
    };
  
    const handleChipDelete = (chipToDelete: string) => () => {
      setChips((prevChips) => prevChips.filter((chip) => chip !== chipToDelete));
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
          {chips.map((chip, index) => (
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