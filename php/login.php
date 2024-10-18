<?php
    session_start();  // 세션 시작

    // 사용자 입력값 받아오기
    $id = $_POST['userid'];
    $passwd = $_POST['userpasswd'];

    // DB 연결
    $conn = mysqli_connect('localhost', 'root', '111111', 'mysql');
    if (!$conn) {
        die("연결 실패: " . mysqli_connect_error());
    }

    // 아이디로 비밀번호 조회 (Prepared Statement)
    $stmt = $conn->prepare("SELECT password FROM login WHERE id = ?");
    $stmt->bind_param("s", $id);
    $stmt->execute();
    $result = $stmt->get_result();

    // 결과 처리
    if ($row = $result->fetch_assoc()) {
        $hashed_passwd = $row['password'];  // 정확한 컬럼명 사용

        // Debugging: 입력된 값과 DB 값 확인 (옵션)
        echo '<script>';
        echo 'console.log("입력된 비밀번호: ' . $passwd . '");';
        echo 'console.log("DB에 저장된 해시: ' . $hashed_passwd . '");';
        echo '</script>';

        // 비밀번호 검증
        if ($passwd == $hashed_passwd) {
            header('Location: /ChoiceGoodMe-Frontend/ChoiceGoodME-Fronted/home.html'); // 리디렉션할 페이지
            exit();
        }
        else {
            header('Location: /ChoiceGoodMe-Frontend/ChoiceGoodME-Fronted/login.html'); // 리디렉션할 페이지
            exit(); // 스크립트 종료
        }  
    }
    else {
        $insert_stmt = $conn->prepare("INSERT INTO login (id, name, password) VALUES (?, ?, ?)");
        $insert_stmt->bind_param("sss", $id, $name, $passwd);

        if ($insert_stmt->execute()) {
            echo "로그인에 성공했습니다.";
        }
        else {
            echo "로그인에 실패했습니다: ".$insert_stmt->error;
        }
    }

    // 자원 해제 및 연결 종료
    $stmt->close();
    $conn->close();
?>
