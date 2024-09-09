import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  // console.log(selectedConversation.fullname);
  return (
    <div className="relative flex items-center h-[8%] justify-center gap-4 bg-slate-800 hover:bg-slate-700 duration-300 rounded-md">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5"
      >
        <CiMenuFries className="text-white text-xl" />
      </label>
      <div className="flex space-x-3 items-center justify-center h-[8vh] bg-gray-800 hover:bg-gray-700 duration-300">
        <div className="avatar online">
          <div className="w-16 rounded-full">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACUCAMAAABRNbASAAAAPFBMVEX///+ZmZmVlZXb29uSkpLz8/ONjY38/Pz5+fnu7u7Pz8/T09OsrKykpKTi4uLMzMy1tbXAwMDGxsbo6OinP7rkAAAFQElEQVR4nO1c2ZKrIBANiyIqrv//rxfNzMQF6W5AU3WLk7xKjk3vDXm9MjIyMjIyMjIyMjL+T+hZ9NO4YupFp7/N5w1VzM1guJSS/0HajxmauVBfpTbXg7G0mAMrwXr+EjFV1C2zcnIx+yXIWVt/QX5KDEx6eP1BskGol3qQoWoM84lsLz9mmue4qdqghLYRn6mrZ7iJFi20j/R42z1AbW5LMrUVZXu79+vxunaSHutvJKZeuiUq2x6yvdHviXCx/QrvNs0bI6mt9Ebr9NJTq4aoLf2FHG5wKlWAA3GCt1Vq2WmTiJtlZxL7lCIdt4VdkVJ2SbktRluk41a1Kamxt94lgkort5WdSbSvakT5EC5Lm6rbfB3FTo5p2DWIn7M52yB0UVWFFgMq15NJAu2MyELkku3+wWbJ7rpihzJBnEUYqs3VDnukOoTLNvEmO8DcJtdzE/icHGO5daDC8cbtUWFVlZEpSgX9AGPi6lkBPmrivB24OT6j66GHeZTFanD5wfc4qK88JgWAV/daXBH3bn7MsfvSQ0bBg52dAgUHuarCgKILjWIaWNkWBNAScNkRqnVgwIcjEBj7rCcOkx3s4+E1YB8exq0GFzbwIpDSMVkHUFNqAF8a4QhgZxRkEjPEDWEPqEI8xJvAu+pOR/aY4FVC9hXUllSSQ2juERUiAU6hc9Yh0ZVOIMilsFZrr5dJ1yUwLSUJvrPCFEfk6K8wdXQJprICUyi21H3ViP1AvDPoK1dQ42uHWhXqF4GpwxvUWqJBdSAgZ4LsFTREcmCa+Ib0JnQat4h15jStQ/indV2fMitkM1QSzRVlrCs7z8bCdTXiDV3kMMb6fu3LMgKpGRbEfhiimP5j5w7/Cg75H9CK64qwMnc17xVlMCDvI8c4aw6rVzVp1uO3+Thyi0r3G3pVTZxZ3EvOrl+aSXTz3InJlOSHbya39ISXdubFWYlvk4vArQYhyyOWMzD3kUMTs+nY2HS62EF3zbgcOsGuQiOHjBCSjeJSXwox4o6eUCME3GBiq3+DukwNxt9RYyuihOC4oywNfAYFU2LuAEZtOSCTaw0GMt4T8zkBSQ5bzyn43AKn1ob+GoLTGhwzYF7UGsLbMOXUAULlnVHR50y+VJi+mneC1lJX87WHeMCI3tP1v8hWffB0c+m9jZdv2BQy27wih+nKuXBZ7iA6yydcxAge0E5740LtgqY4Fz2Y0DmkupqOSmq9v8DdyomYVil3SAw7n+Pe14gBrtuxh72tcxvoPmkDV90TqiYuBQlyI79wqnHgWo5mP48afFdnyQUNcBac42v4BHKFI4UNPb+hzn4zbijvmPqHevSXq8yJUjlXDIs4+HKK/pFnBo/ztICY/0F10LrIgyCJ1zv0rckTgwMODVNyp/qAvX1FueAFO3IxBzdW7BviacnJ6FOvu41NSi52U18Hx5mSXKRDf2Pr7JJKLsmB141zMiISG1eS6PbB5pgej8THGOIV7geUkQIOUaFhD9JQAcUt+rjmhxt6Tvc8t5VfStnJFE5kxy7FHZcfbmnltgI7oIRA7mOi0ITMP05I50P2EPFXD7i57W5VEXcnbbmVlvAKyQm0UeVRbCy0DkRiDhfeepnv5ouuTZjmcXOTJeyhJ+RVlq3U5HSntm1RjDTV42x8itqCeWJor1ey6ek/HSiaFiG+5bI8NL27B3PfeuXHJWv7NeH9yl8hVLoZrLJbEZ46NJbZ0OiH7qBfoxDT2LZm4bN+banRjtP1kPhxVIVejm3YTzfPuvi6wLa45SpyRkZGRkZGRkZGxo34B93MOJmmz4pnAAAAAElFTkSuQmCC" />
          </div>
        </div>
        <div>
          <h1 className="text-xl">{selectedConversation.fullname}</h1>
          <span className="text-sm">
            {getOnlineUsersStatus(selectedConversation._id)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Chatuser;
