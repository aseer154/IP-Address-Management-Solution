<?php

namespace App\Traits;

use Illuminate\Http\Response;

trait ApiResponser
{
    /**
     * Build a success responses
     *
     * @param string|array $data
     * @param int $code
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function successResponse($data, int $code = Response::HTTP_OK)
    {
        return response()->json([
            'success' => true,
            'data' => $data
        ], $code);
    }

    /**
     * Build error responses
     *
     * @param $message
     * @param int $code
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function errorResponse($message, int $code)
    {
        return response()->json([
            'success' => false,
            'error' => $message,
            'code' => $code
        ], $code);
    }
}
