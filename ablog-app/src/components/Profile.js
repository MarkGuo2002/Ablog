import anya from "../assets/anya.jpg"

const Profile = () => {
    return(
    <div className="group">
        <img className="rounded-full w-14 h-14" src={anya}/>
        <div className=" relative hidden group-hover:block group-hover:text-primaryStrong duration-300 transiition-all">
            <p className="text-slate-500 ml-2">Anya</p>
    </div>
    </div>
    );
}
export default Profile;