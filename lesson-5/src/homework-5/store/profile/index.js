import { useDispatch, useSelector } from "react-redux"


export const Profile = () => {
    const displatch = useDispatch();
    const isShow = useSelector((state) => state.isShow);

    return (
        <div>
            <h1>Profile</h1>
            <input type="checkbox" checked={isShow} onChange={() => {
                displatch({
                    type: TOGGLE_SHOW_PROFILE
                })
            }} />
        </div>
    );
};