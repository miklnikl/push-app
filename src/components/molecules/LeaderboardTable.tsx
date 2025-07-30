import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Chip } from '@mui/material';
import type { Account } from '../../modules/account/types';

type LeaderboardTableProps = {
  accounts: Account[];
};

export function LeaderboardTable({ accounts }: LeaderboardTableProps) {
  // Sort accounts by total pushups (descending)
  const sortedAccounts = [...accounts].sort((a, b) => b.progress.totalPushups - a.progress.totalPushups);

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'gold';
      case 2: return 'silver';
      case 3: return '#CD7F32'; // bronze
      default: return 'text.secondary';
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return `#${rank}`;
    }
  };

  if (sortedAccounts.length === 0) {
    return (
      <Box textAlign="center" py={4}>
        <Typography variant="h6" color="text.secondary">
          No accounts to display
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          Complete some workouts to appear on the leaderboard!
        </Typography>
      </Box>
    );
  }

  return (
    <TableContainer component={Paper} elevation={1}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell width="80px">Rank</TableCell>
            <TableCell>User</TableCell>
            <TableCell align="right">Total Pushups</TableCell>
            <TableCell align="right">Workouts</TableCell>
            <TableCell align="right">Average</TableCell>
            <TableCell>Last Workout</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedAccounts.map((account, index) => {
            const rank = index + 1;
            const lastWorkoutDate = account.progress.lastWorkoutDate;
            
            return (
              <TableRow key={account.id} sx={{ backgroundColor: rank <= 3 ? 'action.hover' : 'inherit' }}>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Typography variant="h6" sx={{ color: getRankColor(rank) }}>
                      {getRankIcon(rank)}
                    </Typography>
                  </Box>
                </TableCell>
                
                <TableCell>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                      {account.user.name.charAt(0).toUpperCase()}
                    </Avatar>
                    <Box>
                      <Typography variant="body2" fontWeight="medium">
                        {account.user.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {account.user.email}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                
                <TableCell align="right">
                  <Typography 
                    variant="h6" 
                    fontWeight="bold" 
                    sx={{ color: rank <= 3 ? getRankColor(rank) : 'primary.main' }}
                  >
                    {account.progress.totalPushups}
                  </Typography>
                </TableCell>
                
                <TableCell align="right">
                  <Chip 
                    label={account.progress.totalWorkouts} 
                    size="small" 
                    variant="outlined"
                    color={rank <= 3 ? 'primary' : 'default'}
                  />
                </TableCell>
                
                <TableCell align="right">
                  <Typography variant="body2" color="text.secondary">
                    {account.progress.averagePushupsPerWorkout}
                  </Typography>
                </TableCell>
                
                <TableCell>
                  <Typography variant="body2" color="text.secondary">
                    {lastWorkoutDate ? lastWorkoutDate.toLocaleDateString() : 'Never'}
                  </Typography>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}