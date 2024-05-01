import React, { useEffect, useState } from "react";
import Button from "../Component/FormComponent/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState(" ");
    const [loading, setLoading] = useState(true);
    const navigate=useNavigate();
    const token=localStorage.getItem("token");

    useEffect(() => {
        setLoading(true); 
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`,{
            headers:{
                authorization:"Bearer "+token
            }
        })
            .then(response => {
                setUsers(response.data.user);
                console.log(response)
                setLoading(false); 
            })
            .catch(error => {
                console.error("Error fetching users:", error);
                setLoading(false); 
            });
    }, [filter]);

    return (
        <>
            <div className="p-3 font-bold mt-6 text-lg">Users</div>
            <div className="my-2 px-2">
                <div className="flex justify-between px-3">
                <input
                    type="text"
                    onChange={(e) => { setFilter(e.target.value) }}
                    placeholder="Search users..."
                    className="w-3/4 px-2 py-2 border rounded border-slate-200"
                />
                <div className="flex flex-col justify-center h-ful">

                <Button text={"History"} onClick={()=>{navigate("/trnx")}}/>
                </div>
                </div>
            </div>
            <div>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    users.map(user => <User key={user._id} user={user} />)
                )}
            </div>
        </>
    );
};

function User({ user }) {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between px-3" key={user._id}>
            <div className="flex">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.firstName[0]}
                    </div>
                </div>
                <div className="flex flex-col justify-center h-ful">
                    <div>
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center h-ful">
                <Button onClick={() => {
                    navigate(`/send?id=${user._id}&name=${encodeURIComponent(user.firstName)}`);
                }} text="Send Money" />
            </div>
        </div>
    );
}
