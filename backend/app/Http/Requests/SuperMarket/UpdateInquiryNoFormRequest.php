<?php

namespace App\Http\Requests\SuperMarket;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use App\Exceptions\InvalidParameterErrorResponseException;

class UpdateInquiryNoFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    protected function failedValidation(Validator $validator)
    {
        throw new InvalidParameterErrorResponseException($validator->errors()->toJson());
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'inquiry_no' => 'required',
            'shipment_no' => 'required',
        ];
    }
}
