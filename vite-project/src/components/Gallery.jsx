import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Divider from '@mui/material/Divider';

const Gallery = () => {
    const [inspos, setInspos] = useState([]);

    useEffect(() => {
        const fetchInspos = async () => {
        const resp = await fetch("/api/inspos");
        if (resp.ok) {
            const inspos = await resp.json();
            setInspos(inspos);
        }
    };
    fetchInspos();
}, []);

    return (
        <div>
            <p id='gallery-title'>
                <Divider />
                G A L L E R Y
                <Divider />
            </p>
            <div id='gallery-image'>
            <Box sx={{ overflowY: 'scroll' }}>
            <ImageList variant="masonry" cols={4} gap={40}>
            {inspos.map((i) => (
                <ImageListItem key={i.id}>
                    <img 
                        className='inspo-image'
                        src={i.image}
                        srcSet={i.image}  
                        alt='cute hair'
                        loading="lazy"/>
                    <ImageListItemBar
                    id='gallery-desc'
                    title={<span>Done By: {i.stylist.name}</span>}
                    position="below"
                    />
                </ImageListItem>
            ))}
            </ImageList>
            </Box>
            </div>
        </div>
    );
}

export default Gallery