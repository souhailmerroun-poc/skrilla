import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            Today's portfolios
                            <table className="table-auto border-separate border border-green-800">
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Total value</th>
                                        <th>24-hour value change</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Link href={route('users.show', 1)}>Souhail M.</Link></td>
                                        <td>$28,486.62</td>
                                        <td>+$229.00</td>
                                    </tr>
                                    <tr>
                                        <td><Link href={route('users.show', 2)}>Mohcine A.</Link></td>
                                        <td>$14,486.62</td>
                                        <td>+1229.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="p-6 bg-white border-b border-gray-200">
                            Today's order History
                            <table className="table-auto border-separate border border-green-800">
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Date</th>
                                        <th>Pair</th>
                                        <th>Type</th>
                                        <th>Side</th>
                                        <th>Price</th>
                                        <th>Amount</th>
                                        <th>Total</th>
                                        <th>Trigger Conditions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Link href={route('users.show', 1)}>Souhail M.</Link></td>
                                        <td>2021-10-23 04:29:01</td>
                                        <td>BTC/USDT</td>
                                        <td>Market</td>
                                        <td>Buy</td>
                                        <td>60000</td>
                                        <td>0.002</td>
                                        <td>120 USDT</td>
                                        <td>60,010.00000000</td>
                                    </tr>
                                    <tr>
                                        <td><Link href={route('users.show', 2)}>Mohcine A.</Link></td>
                                        <td>2021-10-23 04:29:01</td>
                                        <td>BTC/USDT</td>
                                        <td>Market</td>
                                        <td>Sell</td>
                                        <td>60000</td>
                                        <td>0.002</td>
                                        <td>120 USDT</td>
                                        <td>60,010.00000000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
