import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';

export default (props) => {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Markets</h2>}
        >
            <Head title="Markets" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <table className="table-auto border-separate border border-green-800">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>24H Change</th>
                                        <th>24H Volume</th>
                                        <th>Market cap</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Link href={route('coins.show', 1)}>SOL/BNB</Link></td>
                                        <td>$195.14</td>
                                        <td>-3.46%</td>
                                        <td>16,671.25</td>
                                        <td>$72.25M</td>
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
