import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;

  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.standard,
  }),
}));

export const ExpandMoreButton = ({
  expand,
  onExpandChange,
}: {
  expand: boolean;
  onExpandChange: (expanded: boolean) => void;
}) => (
  <ExpandMore
    expand={expand}
    aria-expanded={expand}
    onClick={() => onExpandChange(!expand)}
    aria-label='show-more'>
    <ExpandMoreIcon />
  </ExpandMore>
);
