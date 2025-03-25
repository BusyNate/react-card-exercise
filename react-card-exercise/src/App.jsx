import Post from './components/post';
import icy_mount from './assets/icy_mount.png';


function App(){

        const post = {
            image: icy_mount,
            title: 'Post One',
            content: 'lorem ipsum dolor sit amet lore ipsum dolor sit amet lore ipsum dolor sit amet lore ipsum dolor sit amet',
            read: 102,
            views: 5132,
            comments: 30,
            relativetime: '1 hour ago'
        }

    return(
        <div>
            <Post post={post}/>
        </div>
    )



}

export default  App ;