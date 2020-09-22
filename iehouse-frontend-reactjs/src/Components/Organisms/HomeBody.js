import React, { useContext } from 'react'
import { Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { TitleCard } from '../Atoms/TitleCard';
import { useFetchRoom } from '../../Hooks/useFetchRoom';
import { useFetchBulb } from '../../Hooks/useFetchBulb';
import { UseContext } from '../../Context/UseContext';

export const HomeBody = () => {

    const { user, bulbs, rooms } = useContext(UseContext);

    const getChartData = (e) => {
        const ctx = e.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 250);
        gradient.addColorStop(0, 'rgba(25,142,255,1)');   
        gradient.addColorStop(1, 'rgba(25,142,255,0)');

        return {
            labels: ["02:00","04:00","06:00","08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00","00:00"],
            labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
            datasets: [{
                label: 'level of thiccness',
                data: [32, 38, 45, 40, 69, 55, 76],
                backgroundColor: gradient,
                borderWidth: 2,
                borderColor: 'rgb(25, 140, 255)',
                pointBorderWidth: 2,
                pointBackgroundColor: 'rgb(255, 255, 255)',
                pointRadius: 4,
                PointHoverBorderWidth: 2,
                pointHoverRadius: 8,
                tension: 0
            }],
        }
    }

    return (
        <div>
            <div className="bg-white border-bottom p-3 pl-4">
                <h1 className="h1-global">Home</h1>
            </div>
            <div className="home-container">
                <div className="row">
                    <div className="w-50 p-0 col mr-1 d-flex flex-column">
                        <div className="bg-white mb-2 p-3 h-50 d-flex flex-column justify-content-center align-items-center">
                            <h2 className="text-size-8 text-primary">Bienvenido, {user.username}</h2>
                            dfhgd
                        </div>
                        <div className="row m-0 p-0 h-50">

                            <div class="col principal-card card bg-white border-0 p-0 mr-1 rounded-0">
                                <TitleCard title={'Bombillos'} icon={<FontAwesomeIcon icon={faLightbulb} />} />
                                <div class="p-3 h-100 d-flex flex-column justify-content-center align-items-center">
                                    <h2 className="text-size-7 text-primary">{bulbs.length}</h2>
                                    <p className="p-0">bombillos <span className="alert-green p-1 rounded pt-0">permitidos</span></p>
                                    <button className="btn btn-sm btn-primary">Administrar</button>
                                </div>
                            </div>

                            <div class="col principal-card card bg-white border-0 p-0 ml-1 rounded-0">
                                <TitleCard title={'Cuartos'} icon={<FontAwesomeIcon icon={faCube} />} />
                                <div class="p-3 h-100 d-flex flex-column justify-content-center align-items-center">
                                    <h2 className="text-size-7 text-primary">{rooms.length}</h2>
                                    <p className="p-0">cuartos <span className="alert-green p-1 rounded pt-0">permitidos</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-50 bg-white p-4 col ml-1">
                        <h4 className="mb-4">Consumo de la semana</h4>
                        <div className="graphic">
                            <Line
                                data={getChartData} 
                                options={{
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                autoSkip: true,
                                                maxTicksLimit: 10,
                                                beginAtZero: true
                                            },
                                            gridLines: {
                                                display: true
                                            }
                                        }],
                                        xAxes: [{
                                            gridLines: {
                                                display: false
                                            }
                                        }]
                                    },
                                    maintainAspectRatio: false,
                                    responsive: true,
                                    legend: {
                                        display: false
                                    },
                                    tooltips: {
                                        titleFontSize: 20,
                                        xPadding: 20,
                                        yPadding: 20,
                                        bodyFontSize: 15
                                    }
                                }} 
                            />
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div class="col principal-card card bg-white border-0 p-0 rounded-0 p-3">
                        <div className="card-header bg-white">
                            <h5>Historial</h5>
                        </div>
                        <div class="p-3 h-100 d-flex flex-column justify-content-center align-items-center">
                            <h2 className="text-size-7 text-primary">10</h2>
                            <p className="p-0">bombillos <span className="alert-green p-1 rounded pt-0">permitidos</span></p>
                            <button className="btn btn-sm btn-primary">Administrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
