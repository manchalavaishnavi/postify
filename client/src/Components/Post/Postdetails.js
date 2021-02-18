import './postpage.css';
import heart from './heart.png'
import share from './share.png'

function Postdetails(props){
    const likesbutton= async (e)=>{
        const data = new FormData();
        data.append("id",props.id)
        console.log('like',props.id)
        fetch('http://localhost:9000/post/' + props.id, {
            method: 'PUT',
            body: data,
            
        }).then(res => res.json())
        .then((data)=>console.log(data));
        window.location.href=".";
    }
    return (
        <div>
            <div className='postpage_heartshare'>
                <button className='heartbutton'><img className='postpage_heart' src={heart} alt="my image" onClick={likesbutton}/></button>
            
            <input type='image' src={share} alt=' ' className='postpage_share'/>
            <h1 className='postpage_date'>{props.date}</h1>
            </div>

            
            <div className='postpage_messagelikes'>
            <h1 className='postpage_likes' >{props.likes} likes</h1>
            <h1 className='postpage_message'>{props.message}</h1>
            </div>
        </div>
    )
}
export default Postdetails;