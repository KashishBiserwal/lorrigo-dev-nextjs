"use client";
import { ColumnDef } from "@tanstack/react-table";
import { B2COrderType } from "@/types/types";

export const AdminPincodeServiceCol: ColumnDef<B2COrderType>[] = [
    {
        header: 'Partner',
        // accessorKey: 'customerDetails', 
        // cell: ({ row }) => {
        //     const rowData = row.original;
        //     return (
        //         <div className="space-y-1 items-center">
        //             <p className="font-medium underline underline-offset-4 text-base text-blue-800 flex items-center">
        //                 <TrackOrder
        //                     order={rowData}
        //                 />
        //                 <Copy className="ml-2 cursor-pointer" size={15} onClick={() => handleCopyText(`${rowData.order_reference_id}`)} /></p>
        //             <p>{formatDate(`${rowData?.order_invoice_date}`, 'dd MM yyyy | HH:mm a')}</p>
        //             <p className="uppercase flex gap-1"><ShoppingCartIcon size={18} /> Custom</p>
        //         </div>
        //     )
        // }
    },
    {
        header: 'In Serviceable',
        // accessorKey: 'order_reference_id',
        // cell: ({ row }) => {
        //     const rowData = row.original;
        //     return (
        //         <div className="space-y-1 items-center">
        //             <p>{rowData.customerDetails?.name}</p>
        //             <p>{rowData.customerDetails?.email}</p>
        //             <p>{formatPhoneNumberIntl(`${rowData.customerDetails?.phone}`)}</p>
        //         </div>
        //     )
        // }
    },
    {
        header: 'Prepaid Available',
        // accessorKey: 'pickupAddressType',
        // cell: ({ row }) => {
        //     const rowData = row.original;
        //     return (
        //         <div className="space-y-1 items-center">
        //             <p>Dead wt. 0.5kg</p>
        //             <p>{rowData.orderBoxLength} x {rowData.orderBoxWidth} x {rowData.orderBoxHeight} ({rowData.orderSizeUnit})</p>
        //             <p>Vol. weight: {Math.ceil(((rowData?.orderBoxLength || 1) * (rowData?.orderBoxWidth || 1) * (rowData?.orderBoxHeight || 1)) / 5000)} ({rowData?.orderWeightUnit})</p>
        //         </div>
        //     )
        // }
    },
    {
        header: 'COD Available',
        // accessorKey: 'pickupAddressType',
        // cell: ({ row }) => {
        //     const rowData = row.original;
        //     return (
        //         <div className="space-y-1 items-center">
        //             <p>{formatCurrencyForIndia(Number(rowData.productId?.taxable_value))}</p>
        //             <Badge variant={rowData.payment_mode == 0 ? "success" : "failure"}>{rowData.payment_mode == 0 ? "Prepaid" : "COD"}</Badge>
        //         </div>
        //     )
        // }
    },
];