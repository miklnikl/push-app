import { Chip } from '@mui/material';
import { WORKOUT_CONFIG } from '../../modules/workout/constants';
import { getSetChipColor, getSetChipVariant } from '../../modules/workout/utils';

type SetChipProps = {
  pushupCount: number;
  setIndex: number;
  currentSetIndex: number;
};

export function SetChip({ pushupCount, setIndex, currentSetIndex }: SetChipProps) {
  return (
    <Chip
      label={`${pushupCount}`}
      color={getSetChipColor(setIndex, currentSetIndex)}
      variant={getSetChipVariant(setIndex, currentSetIndex)}
      sx={{
        fontSize: WORKOUT_CONFIG.CHIP.FONT_SIZE,
        height: WORKOUT_CONFIG.CHIP.HEIGHT,
        minWidth: WORKOUT_CONFIG.CHIP.MIN_WIDTH,
      }}
    />
  );
}