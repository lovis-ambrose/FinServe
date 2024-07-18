import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () =>{
    const loggedIn = {firstName: 'Ambrose', lastName: 'LoviSoft', email: 'lovis.ambrose@lovisoft.com'};
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently"
                    />

                    <TotalBalanceBox 
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1750.35}
                    />
                </header>
                RECENT TRANSACTIONS
            </div>

            <RightSidebar 
                user = {loggedIn}
                transactions = {[]}
                banks = {[{currentBalance: 200.5}, {currentBalance: 125.35}]}
            />
        </section>
    )
}

export default Home;