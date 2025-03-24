import { Post } from './components/post';
import icy_mount from ' ./assets/icy_mount';


function App(){

const post = {
    image: icy_mount,
    title: 'Title',
    content: 'Content',
    read: 10,
    views: 20,
    comments: 30,
    relativetime: '1 hour ago'
}

return(
    <div>
        <Post post={post}/>
    </div>
)



}

export { App };