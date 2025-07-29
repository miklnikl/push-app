import { Typography, Box } from '@mui/material';

type SimplePageContentProps = {
  title: string;
  subtitle: string;
  description: string;
};

export function SimplePageContent({ title, subtitle, description }: SimplePageContentProps) {
  return (
    <>
      <Typography variant='h4' gutterBottom>
        {title}
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        {subtitle}
      </Typography>
      <Box mt={2}>
        <Typography>
          {description}
        </Typography>
      </Box>
    </>
  );
}