<?php

namespace App\Http\Controllers;

use App\Models\empty;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Expr\AssignOp\Coalesce;

class GameController extends Controller
{
    public function PostGameResult(Request $request){
        $table_id = $request->table_id;
        $answer = $request->answer;

        $current_game = DB::table("current_game")->value("current_game");
        if($current_game > 5) {
            if($answer == "A" || $answer == "B" || $answer == "C" || $answer == "D" ){
                return "ゲーム２に変えてください。";
            }
        }
        else{
            if($answer != "A" && $answer != "B" && $answer != "C" && $answer != "D" ){
                return "ゲーム1に変えてください。";
            }
        }
        $current_table = DB::table ("master_table") -> where("game_no", "=",$current_game)->value("table_name");
        DB::table($current_table)->insert(["table_no" => $table_id,"submit_data" =>$answer]);
      

    }


    public function GetGameResult($current_game,$table_id){
        $data = DB::table("result") -> where("game","=",$current_game) -> where("table_id","=",$table_id) ->count();
        return $data;
        
    }

    public function ChangeGame(Request $request){
        $current_game = $request -> currentGame;
        DB::table("current_game")->update(["current_game" => $current_game]);  
    }


    public function GetAnswer($current_game){
        if($current_game > 5){
            $data = DB::table("Result_".$current_game)->orderByRaw('Coalesce(id,10000)')->get();
        }else{
            $data = DB::table("Result_".$current_game)->get();
        }
        $correct_answer = DB::table("answer")->where("game_no","=",$current_game)->value("answer");

        return  ['data' => $data, 'correct_answer' => $correct_answer];  
    }

    
}
