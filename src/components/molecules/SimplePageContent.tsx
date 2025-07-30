import { Typography } from '@mui/material';

type SimplePageContentProps = {
  title: string;
  subtitle: string;
  description?: string;
  children?: React.ReactNode;
};

export function SimplePageContent({ title, subtitle, description, children }: SimplePageContentProps) {
  return (
    <>
      <Typography variant='h4' gutterBottom>
        {title}
      </Typography>
      <Typography variant='h6' color='text.secondary' gutterBottom>
        {subtitle}
      </Typography>
      {description && (
        <Typography variant='body1' color='text.secondary' gutterBottom mb={3}>
          {description}
        </Typography>
      )}
      {children}
    </>
  );
}