import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import { Nav } from './Nav';
import { TripsCount } from './trips/TripsCount';
import { AddTrip } from './trips/AddTrip';
import { TripsList } from './trips/TripsList';
import { Error404 } from './Error404';

function App() {
    const [place,setPlace]=useState()
    const [date,setDate]=useState()
    const [type, setType] = useState()

  
        setPlace(["Manali", "mumbai", "Marina"])
        setDate(["2017-01-01","2017-04-05","2017-02-09"])
        setType(["Trek","Club","Tropic"])
    

    // countDays(filter) {
    //     const { allTrips } = this.state;
    //     return allTrips.filter(trip => filter ? trip.type === filter : trip).length;
    // }

    // Switch goes to first matching route

        return (
            <div className="app">
                <Router>
                    <div className="route-container">
                        <Nav />
                        <Switch>
                            <Route exact path="/" render={(props) => (
                                <TripsCount
                                    total={countDays()}
                                    trek={this.countDays('Trek')}
                                    tropic={this.countDays('Tropic')}
                                    club={this.countDays('Club')}
                                />
                            )}>
                            </Route>
                            <Route path="/list/:filter" render={(props) => (
                                <TripsList
                                    {...props}
                                    days={this.state.allTrips}
                                />
                            )}/>
                            <Route path="/list" render={(props) => (
                                <TripsList
                                    {...props}
                                    days={this.state.allTrips}
                                />
                            )} />
                            <Route path="/add" render={(props) => (
                                <AddTrip
                                    {...props}
                                    newTrip={this.addTrip}
                                />
                            )} />
                            <Route component={Error404} />
                        </Switch>
                    </div>                    
                </Router>                
            </div>
        )
    }
