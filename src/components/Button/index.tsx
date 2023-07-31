import { Button } from '@mui/material'
import { Link } from 'react-router-dom';

interface ButtomCustomProps {
  text: string;
  link?: string | undefined;
  styling: string
}

export default function ButtonCustom({ text, link, styling } : ButtomCustomProps) {
  if(!link) {
    return (
      <Button className={`text-white bg-black w-[6.1rem] ${styling}`}>
        {text}
      </Button>
    );
  }

  return (
    <Link to={link} replace>
      <Button className={`text-white bg-black w-[6.1rem] ${styling}`}>
        {text}
      </Button>
    </Link>
  )
}
