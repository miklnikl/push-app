import { Chip } from '@mui/material';

type SimpleSetChipProps = {
  pushupCount: number;
  setIndex: number;
  currentSetIndex: number;
};

export function SimpleSetChip({ pushupCount, setIndex, currentSetIndex }: SimpleSetChipProps) {
  const getChipColor = () => {
    if (setIndex < currentSetIndex) return 'success';
    if (setIndex === currentSetIndex) return 'primary';
    return 'default';
  };

  const getChipVariant = () => {
    return setIndex === currentSetIndex ? 'filled' : 'outlined';
  };

  return (
    <Chip
      label={`${pushupCount}`}
      color={getChipColor()}
      variant={getChipVariant()}
      sx={{
        fontSize: '1rem',
        height: 40,
        minWidth: 50,
      }}
    />
  );
}