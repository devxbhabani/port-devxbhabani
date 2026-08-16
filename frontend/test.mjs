import { ArcadeRenderer } from 'pacman-contribution-graph'; 
const r = new ArcadeRenderer({
    game:'pacman', 
    username:'devxbhabani', 
    platform:'scenario', 
    scenario:'random', 
    svgCallback:(s) => {
        const match = s.match(/<svg[^>]*>/); 
        console.log(match ? match[0] : 'no svg');
    }
}); 
r.start();
