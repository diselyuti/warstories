<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\histories;

class HistoryController extends Controller
{
    public function index()
    {
        return histories::all();
    }

    public function show(histories $story)
    {
        return $story;
    }

    public function store(Request $request)
    {
        $story = histories::create($request->all());

        return response()->json($story, 201);
    }

    public function update(Request $request, histories $story)
    {
        $story->update($request->all());

        return response()->json($story, 200);
    }

    public function delete(histories $story)
    {
        $story->delete();

        return response()->json(null, 204);
    }
}
