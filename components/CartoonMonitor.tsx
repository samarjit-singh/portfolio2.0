"use client";
import React, { useEffect, useState } from "react";

const CartoonMonitor = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch("/api/github");
      const data = await res.json();
      setProfile(data);
    };
    fetchProfile();
  }, []);

  return (
    <div className="cartoon-monitor">
      <div className="screen">
        {profile ? (
          <div className="content">
            <h1 className="name">{profile.name}</h1>
            <p className="bio">{profile.bio}</p>
            <a
              className="link"
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit my GitHub
            </a>
          </div>
        ) : (
          <p className="loading">Loading...</p>
        )}
      </div>
      <div className="stand"></div>
    </div>
  );
};

export default CartoonMonitor;
