<?php

namespace App\Http\Controllers;

use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use App\Models\IpAddress;
use Illuminate\Http\Response;

class IpAddressController extends Controller
{
    use ApiResponser;

    /**
     * Return the list of IP Addresses
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $ipAddresses = IpAddress::all();

        return $this->successResponse($ipAddresses, 200);
    }

    /**
     * Create a new record of IP Address
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        try {
            $rules = [
                'ipAddress' => 'required|max:255',
                'label' => 'required|max:255'
            ];

            $request->validate($rules);
            $ipAddress = IpAddress::create($request->all());

            return $this->successResponse([ 'message' => 'IP Address successfully created' ], 201);
        }
        catch  (\Exception $ex) {
            return $this->errorResponse($ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Obtain and show a single record of IP Address
     *
     * @param $id
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        try
        {
            $ipAddress = IpAddress::findOrFail($id);

            return $this->successResponse($ipAddress);
        }
        catch(\Exception $ex) {
            return $this->errorResponse($ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Update an existing record of IP Address
     *
     * @param $id
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        try
        {
            $rules = [
                'ipAddress' => 'max:255',
                'label' => 'max:255'
            ];

            $request->validate($rules);
            $ipAddress = IpAddress::findOrFail($id);
            $ipAddress->fill($request->all());

            if ($ipAddress->isClean()) {
                return $this->errorResponse('At least one value must change', Response::HTTP_UNPROCESSABLE_ENTITY);
            }

            $ipAddress->save();

            return $this->successResponse($ipAddress);
        }
        catch (\Exception $ex)
        {
            return $this->errorResponse($ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);

        }
    }
}
