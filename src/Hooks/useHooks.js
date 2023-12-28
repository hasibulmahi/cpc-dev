import { useEffect, useState } from "react";
import http from "../BaseUrl/http";
import axios from "axios";
import { message } from "antd";

const useHooks = () => {
  // Page Loading State
  const [pageLoading, setPageLoading] = useState(true);

  // Refresh Function
  const [refreshState, setRefreshState] = useState(true);
  const toggleRefresh = () => {
    refreshState ? setRefreshState(false) : setRefreshState(true);
  };

  // Delay Reload
  const delayReload = (delay = 2000) => {
    let delayTimer = null;
    if (delayTimer !== null) {
      clearTimeout(delayTimer);
    }
    delayTimer = setTimeout(function () {
      window.location.reload();
    }, delay);
  };

  // Nav Autohide & Scroll to Top Visibility
  const [navAutoHide, setNavAutoHide] = useState("show");
  const [scrollToTopVisibility, setScrollToTopVisibility] = useState("hidden");
  let prevScrollpos = window.pageYOffset;
  let timer = null;
  window.onscroll = function () {
    if (timer !== null) {
      clearTimeout(timer);
    }

    if (
      document.body.scrollTop > 800 ||
      document.documentElement.scrollTop > 800
    ) {
      setScrollToTopVisibility("visible");
    } else {
      setScrollToTopVisibility("hidden");
    }

    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setNavAutoHide("show");
    } else {
      setNavAutoHide("hide");
    }
    prevScrollpos = currentScrollPos;
  };

  // Random ID Generator
  const randomIDGenerator = (length = 6) => {
    let result = "";
    const chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = length; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    if (result.length !== length) {
      randomIDGenerator(length);
    }
    return result.toLowerCase();
  };

  // DP/CV Modal Image
  const [cropperImage, setCropperImage] = useState("");

  // declare user state
  const [user, setUser] = useState({});
  // error state
  const [authError, setAuthError] = useState("");

  //--------handle flag Update--------//

  const handleFlag = (uid) => {
    const data = { uid };
    http.post("/initialFlag", data).then((res) => {
      if (res.data.status === 200) {
      } else {
      }
    });
  };

  // Display Name
  const displayNameAliases = ["md", "md.", "mst", "mst."];
  const displayNameArray = user?.name
    ?.split(/(\s+)/)
    .filter((x) => !x.includes(" "))
    .filter(
      (x) => !displayNameAliases.some((y) => x.toLowerCase().includes(y))
    );

  //advisor data area
  const [advisors, setAdvisors] = useState([]);
  useEffect(() => {
    fetch("/teachers.json")
      .then((res) => res.json())
      .then((data) => data.sort((a, b) => a.priority_level - b.priority_level))
      .then((sortedData) => setAdvisors(sortedData));
  }, [refreshState]);

  //team data area
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => data.sort((a, b) => a.priority_level - b.priority_level))
      .then((sortedData) => setTeam(sortedData));
  }, [refreshState]);

  //events data area
  const [events, setEvents] = useState([]);
  useEffect(() => {
    http.get(`/allEvents`).then((res) => {
      setEvents(res?.data?.events);
    });
  }, [refreshState]);

  //users data area
  const [users, setUsers] = useState([]);
  useEffect(() => {
    http.get(`/allUsers`).then((res) => {
      setUsers(res?.data?.users);
    });
  }, [refreshState]);

  const [userFlags, setUserFlags] = useState();
  useEffect(() => {
    http.get(`/flags`).then((res) => {
      setUserFlags(res?.data?.flags.filter((x) => x?.uid === user?.uid)[0]);
    });
  }, [user, refreshState]);

  //certificates data area
  const [certificates, setCertificates] = useState([]);
  useEffect(() => {
    http.get(`/certificates`).then((res) => {
      setCertificates(res?.data?.certificates);
    });
  }, [refreshState]);

  //-------------- handle registration --------------//

  const handleRegistration = (name, email, password, id, phone, navigate) => {
    axios
      .get("https://static.cpc.daffodilvarsity.edu.bd/sanctum/csrf-cookie")
      .then(() => {
        const uid = randomIDGenerator();
        const data = { uid, name, email, password, id, phone };

        http
          .post("/register", data)
          .then((res) => {
            if (res.data.status === 200) {
              //user data save to the user state
              localStorage.setItem("user-id", JSON.stringify(res?.data?.uid));
              localStorage.setItem("authToken", res?.data?.token);
              localStorage.setItem("authName", res?.data?.name);
              handleFlag(uid);
              message.success("Registration Successful");
              navigate("/");
            }
          })
          .then(toggleRefresh());
      })
      .catch((error) => {
        message.error(`Registration Failed. ${error.message}`);
      })
      .finally(delayReload());
  };
  //-------------- handle login --------------//

  const handleLogin = (email, password, navigate, location) => {
    const data = { email, password };
    axios
      .get("https://static.cpc.daffodilvarsity.edu.bd/sanctum/csrf-cookie")
      .then(() => {
        http
          .post("/login", data)
          .then((res) => {
            if (res.data.status === 401) {
              message.error(`Login Failed. ${res.data.message}`);
            }

            if (res.data.status === 200) {
              localStorage.setItem("user-id", JSON.stringify(res?.data?.uid));
              localStorage.setItem("authToken", res?.data?.token);
              localStorage.setItem("authName", res?.data?.name);
              message.success("Login Successful. Welcome Back");
              const destination = location?.state?.from || "/";
              navigate(destination);
              setAuthError("");
            }
          })
          .catch((error) => {
            message.error(`Login Failed. ${error.message}`);
          });
      })
      .catch((error) => {
        message.error(`Login Failed. ${error.message}`);
      })
      .finally(delayReload());
  };

  useEffect(() => {
    const loggedUser = users?.filter(
      (x) => x?.uid === JSON.parse(localStorage.getItem("user-id"))
    )[0];
    setUser(loggedUser);
    if (localStorage.getItem("user-id")) {
      localStorage.setItem("user", JSON.stringify(loggedUser));
    }
  }, [users, refreshState]);

  //---------logout----------//

  const logOut = () => {
    axios
      .post(`https://static.cpc.daffodilvarsity.edu.bd/api/logout`)
      .then((res) => {
        if (res.data.status === 200) {
          setUser({});
          localStorage.removeItem("user");
          localStorage.removeItem("user-id");
          localStorage.removeItem("authToken");
          localStorage.removeItem("authName");
          toggleRefresh();
        }
      })
      .catch((error) => {
        message.error(
          "Logout Failed. Security token missing. Please go to settings & click 'Fix Login/Logout' data."
        );
      });
  };

  useEffect(() => {
    setPageLoading(false);
  }, []);

  return {
    pageLoading,
    refreshState,
    toggleRefresh,
    delayReload,
    navAutoHide,
    scrollToTopVisibility,
    cropperImage,
    setCropperImage,
    advisors,
    team,
    events,
    users,
    userFlags,
    certificates,
    randomIDGenerator,
    handleRegistration,
    user,
    authError,
    handleLogin,
    logOut,
    displayNameArray,
  };
};

export default useHooks;
