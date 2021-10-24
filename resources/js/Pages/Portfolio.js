import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';

export default (props) => {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Portfolio</h2>}
        >
            <Head title="Portfolio" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <table className="table-auto border-separate border border-green-800">
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Coin</th>
                                        <th>Total</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Link href={route('users.show', 1)}>Souhail M.</Link></td>
                                        <td>ETH</td>
                                        <td>1.36716000</td>
                                        <td>$5,622.03</td>
                                    </tr>
                                    <tr>
                                        <td><Link href={route('users.show', 1)}>Souhail M.</Link></td>
                                        <td>BCH</td>
                                        <td>2.62088660</td>
                                        <td>$1,645.10</td>
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
